import Image from "next/image";
import content from "@/styles/content.module.css";
import { Metadata } from "next";
import registerScreen from "@/assets/screenshots/zisty-accounts/register-screen.png";

export const metadata: Metadata = {
    title: 'Account Related / Zisty Accounts',
    description: 'It contains information related to your Zisty Accounts account.',
}

export default function zistyAccountsPage() {
    return (
        <div className={content.content}>
            <div className={content.title}>
                <p className={content.nav}>
                    <a href="/zisty-accounts">Zisty Accounts</a>
                    <i className="bi bi-chevron-right"></i>
                </p>
                <h1>Account Related</h1>
            </div>

            <div className={content.description}>
                <p>Zisty Accountsへアカウントを登録、プロフィールの編集、セキュリティ、連携、パスワード変更などの情報がここに記載されています。</p>

                <h1>Sign up</h1>
                <p>まず<a href="https://accounts.zisty.net/register/">Sign up</a>へアクセスしてください。</p>
                <p>アクセスするとユーザー名、パスワードの入力フォームが表示されますので、その通りに入力してください。</p>
                <p>ユーザー名はアカウントの名前とは別のものなので、特別な名前を入力することをおすすめします。パスワードは強力なもので！</p>
                <Image src={registerScreen} width={1920} height={1080} alt="registerScreen" />
                <br />
                また、サードパーティー製のログインも可能です。現在はGoogle、Githubの2つに対応しています。今後さらに増えること可能性もありますのでお楽しみに。
            </div>
        </div>
    );
}
