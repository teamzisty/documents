import Image from "next/image";
import clsx from "clsx";
import content from "@/styles/content.module.css";
import { Metadata } from "next";
import javascript from "@/assets/screenshots/zisty-accounts/javascript.jpg";

export const metadata: Metadata = {
    title: 'Troubleshooting / Zisty Accounts',
    description: 'It describes the solution to the problem that occurred with Zisty Accounts.',
}

export default function zistyAccountsPage() {
    return (
        <div className={content.content}>
            <div className={content.title}>
                <p className={content.nav}>
                    <a href="/zisty-accounts">Zisty Accounts</a>
                    <i className="bi bi-chevron-right"></i>
                </p>
                <h1>Troubleshooting</h1>
            </div>

            <div className={content.description}>
                <p>問題が発生したときは、まずこちらをご確認ください。 該当する項目が無い、もしくは手順を試しても解決しない場合は、<a href="https://discord.gg/6BPfVm6cST">Discord コミュニティ</a>までお越しください。</p>

                <h1>JavaScriptを有効にしてください</h1>
                <p>これはブラウザがJavaScriptへ対応していない、または無効になっている場合に表示されるものです。JavaScriptに対応しているブラウザを使用するか、JavaScriptを有効にしていただく必要があります。</p>
                <Image src={javascript} alt="javascript" width={1920} height={587} />

                <h1>UIがおかしい</h1>
                <p>その場合はキャッシュを削除することによって解決するケースが多いです。お使いのブラウザからキャッシュを削除し、リロードしてみると解決する可能性があります。</p>

                <h1>認証URLが届かない</h1>
                <p>入力したメールアドレスが違う、または迷惑メールとして割り当てられている可能性があります。迷惑メールを確認してみると解決する可能性があります。</p>
                
                <h1>パスワードを紛失した</h1>
                <p><a href="https://accounts.zisty.net/password_reset/">Password Reset</a>へアクセスし、パスワードをリセットしてください。<br />
                メールアドレスが追加されていないアカウントだった場合、パスワードを復元することはできません。再度アカウントを作成していただく必要があります。</p>

                <h1>アクセスができない</h1>
                <p>Zisty Accountsに関連する機能にアクセスできない場合、システムに障害が発生してしまっている可能性があります。<br />
                <a href="https://teamzisty.instatus.com/">ステータス</a>を確認してみると現在の状況を把握することができます。もし、何も問題がなく、正常に動いているをいう風になっていた場合、「Report an issue」からお問合せください。</p>
            </div>
        </div>
    );
}
