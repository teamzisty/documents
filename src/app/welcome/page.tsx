import Image from "next/image";
import clsx from "clsx";
import content from "@/styles/content.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Welcome to Zisty',
    description: 'Welcome to Zisty Documents. This is where you will find infomation releted to your team.',
}

export default function welcomePage() {
    return (
        <div className={content.content}>
            <div className={content.title}>
                <p className={content.nav}>
                    <a href="/welcome">Get Started</a>
                    <i className="bi bi-chevron-right"></i>
                </p>
                <h1>Welcome to Zisty</h1>
            </div>

            <div className={content.description}>
                <h1>What is?</h1>
                <p>Zistyは日本の学生を中心に構成されたプログラミングサークルチームです。メンバーは幅広いウェブサービスやウェブツールなどを開発しており、様々なプログラミング言語を使用しています。</p>

                <h1>History</h1>
                <p>
                    Zistyはもともと、「NI7」という名前で設立されており、便利なツールなどをリリースしていくといった形でした。その後、「NI7」から今の「Zisty」へ名前が変更され、メンバーを募集しメンバーを集めました。「ジスティー」と読みます。
                </p>

                <h1>Membar</h1>
                <p>
                    プログラミングが好きという気持ちを持った人がこのチームへ参加しています。現在でもメンバーは募集しており、参加することができます。詳しくは<a href="https://zisty.net/blog/join-us">こちら</a>をご参照ください。
                </p>

                <h1>Social Networking Service</h1>
                <h2>Community</h2>
                <p>
                    Zistyは<a href="https://discord.gg/6BPfVm6cST">「Zisty Developers」</a>というDiscordサーバーを運営しています。興味のある方はご参加いただけると大変うれしいです！
                </p>

                <h2>Accounts</h2>
                <p>
                    Zistyとして開設しているSNSアカウントは<a href="https://github.com/teamzisty"><i className="bi bi-github"></i> Github</a>、<a href="https://x.com/teamzisty"><i className="bi bi-twitter-x"></i> X</a>、<a href="discordapp.com/users/1246467877050122290"><i className="bi bi-discord"></i> Discord</a>、<a href="https://misskey.io/@teamzisty"><i className="bi bi-globe"></i> Misskey</a>となっています。
                </p>
            </div>
        </div>
    );
}
