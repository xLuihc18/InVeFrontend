import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { User, Mail, Phone, Edit, Lock, UserSearch } from "lucide-react"

function Perfil() {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold">Mi Perfil</h1>
                    <p className="text-sm">Gestiona tu informacion Personal</p>
                </div>
                <Button variant="outline">
                    <Edit /> Editar perfil
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                <div className="md:col-span-4 flex flex-col items-center space-y-4">
                    <Avatar className="w-40 h-40">
                        <AvatarImage src="" />
                        <AvatarFallback>
                            <User size={80} />
                        </AvatarFallback>
                    </Avatar>
                    <Badge className="px-4">
                        Usuario
                    </Badge>
                    <Button variant="link" className="text-gray-500 text-xs">
                        <Lock size={12} /> Cambiar Contraseña
                    </Button>
                </div>

                <div className="md:col-span-8 space-y-8">
                    <div className="flex items-center border-b pb-2 text-gray-800 gap-3">
                        <UserSearch size={18}></UserSearch>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">Información Personal</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">

                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                                <User size={14}/>Username</label>
                            <Input readOnly className="bg-transparent" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                                <Phone size={14} />Teléfono</label>
                            <Input readOnly className="bg-transparent" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                                <Mail size={14} />Correo Personal</label>
                            <Input readOnly className="bg-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil;