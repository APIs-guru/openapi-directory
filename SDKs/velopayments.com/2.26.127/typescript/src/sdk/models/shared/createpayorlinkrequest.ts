import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreatePayorLinkRequestLinkTypeEnum {
    ParentOf = "PARENT_OF"
}


export class CreatePayorLinkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fromPayorId" })
  fromPayorId: string;

  @Metadata({ data: "json, name=linkType" })
  linkType: CreatePayorLinkRequestLinkTypeEnum;

  @Metadata({ data: "json, name=toPayorId" })
  toPayorId: string;
}
