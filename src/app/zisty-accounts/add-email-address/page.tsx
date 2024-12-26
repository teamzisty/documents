import Image from "next/image";
import clsx from "clsx";
import content from "@/styles/content.module.css";
import { Metadata } from "next";
import emailScreen from "@/assets/screenshots/zisty-accounts/email-screen.png";
import okmail from "@/assets/screenshots/zisty-accounts/email-ok-mail.png";

export const metadata: Metadata = {
    title: 'Add Email Address / Zisty Accounts',
    description: 'It describes adding an email address for Zisty Accounts.',
}

export default function zistyAccountsPage() {
    return (
        <div className={content.content}>
            <div className={content.title}>
                <p className={content.nav}>
                    <a href="/zisty-accounts">Zisty Accounts</a>
                    <i className="bi bi-chevron-right"></i>
                </p>
                <h1>Add Email Address</h1>
            </div>

            <div className={content.description}>
                <p>メールアドレスを追加することによって二段階認証の設定、制限されていたサービスとの連携を行えるようになります。</p>

                <h1>1. メールアドレスを入力</h1>
                <p>まず、<a href="https://accounts.zisty.net/emails/">Emails</a>へアクセスしてください。</p>
                <p>そしたらここで今のパスワード、そして新しいメールアドレスを入力してください。</p>
                <Image src={emailScreen} width={1920} height={1080} alt="emailScreen" />
                <p>入力が終わったら「<i className="fa-regular fa-paper-plane"></i> アドレスに認証URLを送信」というボタンを押し、認証コードを送信しましょう。</p>
                <p>成功すると「追加予定のメールアドレスへ確認URLを送信しました。」という風に変わります。</p>

                <h1>2. メールアドレスの確認</h1>
                <p>入力したメールアドレス宛に確認URLが送信されますので、メール内のリンクをクリックしてください。</p>
                <Image src={okmail} width={894} height={328} alt="okmail" />

                <h1>3. 認証成功</h1>
                <p>「メールが認証されました」と表示されたページでリダイレクトされたら成功です。お疲れ様でした。</p>
            </div>
        </div>
    );
}
