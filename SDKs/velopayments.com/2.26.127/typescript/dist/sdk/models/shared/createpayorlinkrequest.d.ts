import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreatePayorLinkRequestLinkTypeEnum {
    ParentOf = "PARENT_OF"
}
export declare class CreatePayorLinkRequest extends SpeakeasyBase {
    fromPayorId: string;
    linkType: CreatePayorLinkRequestLinkTypeEnum;
    toPayorId: string;
}
