"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchMessages, deleteMessage } from "../redux/slices/chatSlice";
import { MoreDotIcon } from "@/icons";
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";

type ChatItem = {
  id: number;
  text: string;
  session_id?: string;
};

type ChatAsideProps = {
onSelectChat: (id: string) => Promise<void>;
onNewChat: () => void;
};

const ChatAside: React.FC<ChatAsideProps> = ({ onSelectChat,onNewChat }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.chat) as {
    items: ChatItem[];
    loading: boolean;
  };

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  function toggleDropdown(id: number) {
    setOpenDropdownId(openDropdownId === id ? null : id);
  }

  function closeDropdown() {
    setOpenDropdownId(null);
  }

  return (
    <aside className="lg:relative lg:top-auto lg:right-auto lg:h-full lg:w-[280px] lg:flex-col lg:border-l lg:border-gray-200 lg:bg-white lg:p-6 dark:lg:border-gray-800 dark:lg:bg-gray-900">
      {/* Botón para crear un nuevo chat */}
      <button 
       onClick={onNewChat}
       className="mb-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            d="M5 10H15M10 5V15"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Nuevo chat
      </button>

      {/* Lista de chats */}
      <div className="flex-1 custom-scrollbar space-y-3 text-sm">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <ul className="space-y-1">
            {items.map((item) => (
              <li
                key={item.id}
                className="group flex cursor-pointer items-center justify-between rounded-full px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-950"
              >
                <span className="truncate text-gray-700 dark:text-gray-400">
                  {item.text}
                </span>
                <div className="relative inline-block">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="dropdown-toggle"
                  >
                    <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
                  </button>
                  <Dropdown
                    isOpen={openDropdownId === item.id}
                    onClose={closeDropdown}
                    className="w-40 p-2"
                  >
                    <DropdownItem
                      onItemClick={async() => {
                       await onSelectChat(item.id.toString());
                        closeDropdown();
                      }}

                      className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                    >
                      Ver
                    </DropdownItem>
                    <DropdownItem
                      onItemClick={() => {
                        dispatch(deleteMessage(item.id)); // elimina por id
                        closeDropdown();
                      }}
                      className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                    >
                      Borrar
                    </DropdownItem>
                  </Dropdown>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default ChatAside;
