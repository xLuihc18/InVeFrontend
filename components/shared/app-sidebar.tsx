import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image";
import { User, LogOut, Store, Library } from "lucide-react"; 

export function AppSidebar() {
    return (
        <Sidebar>
            {/* Header con Logo */}
            <SidebarHeader className="py-4">
                <div className="flex items-center gap-3 px-4">
                    <Image
                        src="/alma.jpg"
                        width={30}
                        height={30}
                        alt="Logo"
                        className="object-contain"
                    />
                    <h1 className="font-bold text-xl tracking-tight">MIN-EGOCIO</h1>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menú Principal</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/principal">
                                        <Store className="w-5 h-5" />
                                        <span>Tienda</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/ventas">
                                        <Library className="w-5 h-5" />
                                        <span>Ventas</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="pb-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="/perfilusuario">
                                <User className="w-5 h-5" />
                                <span>Perfil</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    
                    <SidebarMenuItem>
                        <SidebarMenuButton className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            <LogOut className="w-5 h-5" />
                            <span>Cerrar Sesión</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}