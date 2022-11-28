import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApplicationCharge {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createUsageCharge - 従量課金データの作成
     *
     * アプリ内で基本機能が利用された頻度に伴って毎月の請求が変動するようなアプリの場合は「従量課金」を使って利用者に変動分の請求を行うことができます。
     * ※無料お試し期間中のショップに対しては従量課金データを作成できません。
     *
    **/
    createUsageCharge(req: operations.CreateUsageChargeRequest, config?: AxiosRequestConfig): Promise<operations.CreateUsageChargeResponse>;
    /**
     * postApplicationCharge - アプリ内課金データの作成
     *
     * 「アプリ内課金」はすでにインストール済みのアプリ上において、利用者が追加の買い切りによる課金によって新たなアプリ内の機能を提供される場合などに、利用者へ買い切りの課金分の請求を行うための課金形式です。
     *
     * この課金はプラン課金の情報に紐付かないため、リクエストされたタイミングで課金データが作成されます。また、同一のアプリ内課金IDで同じ利用者へ複数回請求を行うことも可能です。
     *
     * ただし、アプリの基本機能として提供しているサービスを利用した量やその頻度などに伴って毎月異なった額の請求を行うような課金については、プラン課金の「従量による課金」の機能を使って請求を行う必要があります。
     *
    **/
    postApplicationCharge(req: operations.PostApplicationChargeRequest, config?: AxiosRequestConfig): Promise<operations.PostApplicationChargeResponse>;
}
