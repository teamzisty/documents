import Image from "next/image";
import clsx from "clsx";
import content from "@/styles/content.module.css";
import { Metadata } from "next";
import profileScreen from "@/assets/screenshots/zisty-accounts/profile-screen.jpg";

export const metadata: Metadata = {
    title: 'Basic Attention / Zisty Accounts',
    description: 'It contains basic notes about Zisty Accounts.',
}

export default function zistyAccountsPage() {
    return (
        <div className={content.content}>
            <div className={content.title}>
                <p className={content.nav}>
                    <a href="/zisty-accounts">Zisty Accounts</a>
                    <i className="bi bi-chevron-right"></i>
                </p>
                <h1>Basic Attention</h1>
            </div>

            <div className={content.description}>
                <p>Zisty Accountsを使用するに当たっていくつかの注意事項が存在します。</p>
                
                <h1>Account Info</h1>
                <p>アカウントに登録される情報（アイコン、名前、メールアドレス、アカウント開設日、設定言語）は連携時などに使用され、それは第三者が見ることができます。そのため本名は使用せず、ハンドルネーム（本名の代わり）を使用して登録することをおすすめします。</p>

                <h1>Oauth</h1>
                <p>Oauthはメンバーが開発したサービスと連携し、簡単にログインすることのできる機能です。この連携は設定から簡単に解除することができます。<br />
                しかし、解除しても連携先から情報が消えるわけではありません。もし、何か問題が発生してしまった場合は<a href="mailto:info@zisty.net">info@zisty.net</a>までお問合せください。</p>

                <h1>自己責任</h1>
                <p>Zisty Accountsを使用したことによって起きた損害や、登録したことによって起きた損害、情報の流出等に関して我々は一切の責任を負わないものとします。例えどんな失態であってもです。これは<a href="https://zisty.net/terms">利用規約</a>にも記載されています。</p>
            </div>
        </div>
    );
}
