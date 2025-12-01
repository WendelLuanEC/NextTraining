import { useRouter } from "next/router";

export default function PostPage() {
    const router = useRouter();
    const seguimentos = router.query.slug as string[]|undefined;
    return (
        <div>
            <h2>Post: {seguimentos?.join("/")}</h2>
        </div>
    );
}