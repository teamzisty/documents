import Image from "next/image";
import content from "@/styles/content.module.css";
import { Metadata } from "next";
import profileScreen from "@/assets/screenshots/zisty-accounts/profile-screen.jpg";

export const metadata: Metadata = {
    title: 'About / Zisty Accounts',
    description: 'This article is about Zisty Accounts.',
}

export default function zistyAccountsPage() {
    return (
        <div className={content.content}>
            <div className={content.title}>
                <p className={content.nav}>
                    <a href="/zisty-accounts">Zisty Accounts</a>
                    <i className="bi bi-chevron-right"></i>
                </p>
                <h1>About</h1>
            </div>

            <div className={content.description}>
                <h1>What is?</h1>
                <p>Zisty Accountsは、Zistyが提供しているアカウントサービスです。主な目的はメンバーが公開するサービスへ簡単にログインすることを可能にすることです。このプロジェクトはRionによって行われています。</p>
                <Image src={profileScreen} width={1920} height={1080} alt="zisty_accounts" />

                <h1>Participate in Development, Support the Project</h1>
                <p>
                    Zisty Accountsは一個人によって開発されているプロジェクトであり、脆弱性などがないとは言い切れない状況にあります。そこでぜひプロジェクトに支援をしていただきたいのです。支援といってもお金ではなく、情報を共有、提供してくれるだけでいいんです。それだけでプロジェクトは進化します。よろしくお願いします。
                </p>

                <h2>感想を投稿する</h2>
                <p>SNSや<a href="https://discord.gg/6BPfVm6cST">Discord コミュニティ</a>へZisty Accountsを使用した感想などを投稿、送信を行ってほしいです。その感想はプロジェクトの改善などに大いに役立ちます。</p>

                <h2>議論に参加する</h2>
                <p>新しい機能、または既存の機能について意見を述べたり、不具合を報告したりすることでも貢献できます。そのようなディスカッションは<a href="https://discord.gg/6BPfVm6cST">Discord コミュニティ</a>を使用して行えます。</p>

                <h2>宣伝する</h2>
                <p>このプロジェクト、サービスを宣伝し、ユーザーが増えてくれれば開発者のモチベーションが上がります。よろしくお願いします。</p>

                <h1>Technology</h1>
                <p>
                    Zisty AccountsはJavaScript、PHP、MySQLを使用して作成されています。その他Font Awesome、Bootstrap Icons、Cloudflareなども使用しています。本当に感謝しています。
                </p>

                <h1>Licenses</h1>
                <p>こにあるのは開発で使用された、または機能の実装に使用されているオープンソースやライブラリのライセンスたちです。</p>

                <h2>Google Authenticator PHP class</h2>
                <p>Copyright (c) 2012-2016, <a href="http://www.phpgangsta.de">http://www.phpgangsta.de</a><br />
                    Author: Michael Kliewe, @PHPGangsta and contributors<br />
                    Licensed under the BSD License.</p>
                <p>Copyright (c) 2012, Michael Kliewe All rights reserved.<br />

                    Redistribution and use in source and binary forms, with or without modification,<br />
                    are permitted provided that the following conditions are met:<br />
                    <br />
                    1. Redistributions of source code must retain the above copyright notice, this<br />
                    list of conditions and the following disclaimer.<br />
                    <br />
                    2. Redistributions in binary form must reproduce the above copyright notice,<br />
                    this list of conditions and the following disclaimer in the documentation and/or<br />
                    other materials provided with the distribution.<br />
                    <br />
                    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot; AND
                    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
                    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
                    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
                    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
                    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
                    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
                    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
                    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                </p>

                <h2>Font Awesome</h2>
                <p>Copyright 2024 Fonticons, Inc. Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com <br />
                License - <a href="https://fontawesome.com/license/free">https://fontawesome.com/license/free</a> (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)</p>

                <h2>Bootstrap Icons</h2>
                <p>Please check the license at this URL: <a href="https://github.com/twbs/icons/blob/main/LICENSE">https://github.com/twbs/icons/blob/main/LICENSE</a></p>
            </div>
        </div>
    );
}
