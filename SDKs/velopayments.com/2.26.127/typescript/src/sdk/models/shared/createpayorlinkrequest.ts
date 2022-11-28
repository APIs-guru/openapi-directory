import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreatePayorLinkRequestLinkTypeEnum {
    ParentOf = "PARENT_OF"
}


export class CreatePayorLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromPayorId" })
  fromPayorId: string;

  @SpeakeasyMetadata({ data: "json, name=linkType" })
  linkType: CreatePayorLinkRequestLinkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=toPayorId" })
  toPayorId: string;
}
