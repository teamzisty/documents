import Image from "next/image";
import clsx from "clsx";
import content from "@/styles/content.module.css";
import { Metadata } from "next";
import twoStepVerificationScreen from "@/assets/screenshots/zisty-accounts/2fa-setting-screen.png";
import twoStepDeletionScreen from "@/assets/screenshots/zisty-accounts/2fa-deletion-screen.png";

export const metadata: Metadata = {
    title: 'Two-Step Verification / Zisty Accounts',
    description: 'It describes the two-step verification of Zisty Accounts.',
}

export default function zistyAccountsPage() {
    return (
        <div className={content.content}>
            <div className={content.title}>
                <p className={content.nav}>
                    <a href="/zisty-accounts">Zisty Accounts</a>
                    <i className="bi bi-chevron-right"></i>
                </p>
                <h1>Two-Step Verification</h1>
            </div>

            <div className={content.description}>
                <p>二段階認証はアカウントのセキュリティを高めるために導入されている機能です。これを付けとけばとりあえずセキュリティの面は心配ないかもしれません。</p>

                <h1>二段階認証の追加</h1>
                <h2>1. メールアドレスの追加</h2>
                <p>メールアドレスが追加されていないアカウントは二段階認証を使用する権限がありません。メールアドレスの追加は<a href="../add-email-address">Add Email Addres</a>をご参照ください。</p>
                <h2>2. 認証アプリの選択</h2>
                <p>セキュリティコードを取得できるアプリは様々あり、Google LLCが公開しているGoogle Authenticatorや、Microsoft Corporationが公開しているMicrosoft Authenticatorなどがあります。取得さえできればいいので信頼できるところであればなんでもいいかもしれません。</p>
                <h2>3. アプリの設定</h2>
                <p>ここから設定に入ります！まず、<a href="https://accounts.zisty.net/security/app">2段階認証アプリ/</a>へアクセスしてください。</p>
                <p>「QRコードをスキャンする」というところにあるQRコードを認証アプリを使用して読み取ってください。<br />
                    何らかの理由によってカメラを使用して読み取ることができない場合はQRコードの下にある手動キーというのを使用することによってそちらでも追加することができます。</p>
                <Image src={twoStepVerificationScreen} width={1920} height={1080} alt="2faSettingScreen" />
                <h2>4. 2FAの有効</h2>
                <p>追加することができましたら、アプリに書かれている6桁のセキュリティコードを入力してください。そして下に行き「アプリの有効」を押すことで有効にすることができます。</p>

                <h1>二段階認証の解除</h1>
                <p>まず、<a href="https://accounts.zisty.net/security/app">2段階認証アプリ/</a>へアクセスしてください。</p>
                <p>すると「2FAの無効化」というところに来ますので、ご自身のパスワードを入力し、「アプリの無効化」を押すことで二段階認証を解除することができます。</p>
                <Image src={twoStepDeletionScreen} width={1920} height={1080} alt="2faDeletionScreen" />

                <h1>Q&A</h1>
                <h2>Q. セキュリティコードを諸事情により取得できません。</h2>
                <p>取得不可能の場合はRecovery codesを使用することでアカウントを復元することができます。<br />
                <a href="mailto:info@zisty.net">info@zisty.net</a>、または<a href="https://discord.gg/6BPfVm6cST">Discord サーバー</a>までお越しいただき、Recovery codesを使用したアカウントの復元の旨をお伝えいただけると対応させていただきます。</p>
                <h2>Q. 二段階認証をしていいことはありますか？</h2>
                <p>第三者による不正アクセスを大幅に防ぐことができたり、パスワードの情弱性をカバーすることができます。もちろん毎回ログインするときにやるのはめんどくさいのはわかります。でもこれをすることでリスクを格段に下げることができます。</p>
            </div>
        </div>
    );
}
