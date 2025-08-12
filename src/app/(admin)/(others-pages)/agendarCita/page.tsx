import AppointmentCard from "@/components/appoinment/AppointmentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import BasicTableTwo from "@/components/tables/BasicTableTwo";


export default function AppointmentPage() {
  return (
    <>
    <PageBreadcrumb pageTitle="Agenda"/>
    <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
          <p className="mb-2 text-base font-medium text-gray-800 dark:text-white/90">Próximas citas</p>
          <BasicTableOne />
          <p className="pt-8 mb-2 text-base font-medium text-gray-800 dark:text-white/90">Citas Pasadas</p>
          <BasicTableTwo/>
    </div>
    </>
  );
}
