import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateFundingAccountRequestV2TypeEnum {
    Fbo = "FBO",
    WubsDecoupled = "WUBS_DECOUPLED"
}
export declare class CreateFundingAccountRequestV2 extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    currency?: string;
    name: string;
    payorId: string;
    routingNumber?: string;
    type: CreateFundingAccountRequestV2TypeEnum;
}
