"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchMessages } from "../redux/slices/chatSlice";

type ChatItem = {
  id: number;
  text: string;
};

interface ChatAsideProps {
  onClose?: () => void;
}

const ChatAside: React.FC<ChatAsideProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.chat) as {
    items: ChatItem[];
    loading: boolean;
  };

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <aside className="absolute top-0 right-0 z-50 h-full w-[280px] flex-col border-l border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 lg:relative lg:top-auto lg:right-auto lg:flex">
      
      {/* Botón para cerrar solo en mobile */}
      {onClose && (
        <button
          onClick={onClose}
          className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-400 lg:hidden"
        >
          ✖
        </button>
      )}

      {/* Botón para crear un nuevo chat */}
      <button className="mb-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-600">
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
      <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 text-sm">
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
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default ChatAside;
