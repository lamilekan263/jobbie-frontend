import { useToast } from "@/components/ui/use-toast"


type Props = {
    variant: "default" | "destructive" | null | undefined,
    title: string,
    description: string
}
const Toast = ({ variant, title, description }: Props) => {
    const { toast } = useToast()

    return toast({
        variant: variant,
        title,
        description,
    })

}

export default Toast