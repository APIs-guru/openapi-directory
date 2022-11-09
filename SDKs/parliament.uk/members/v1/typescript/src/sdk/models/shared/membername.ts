import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MemberName extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=nameAddressAs" })
  nameAddressAs?: string;

  @Metadata({ data: "json, name=nameDisplayAs" })
  nameDisplayAs?: string;

  @Metadata({ data: "json, name=nameFullTitle" })
  nameFullTitle?: string;

  @Metadata({ data: "json, name=nameListAs" })
  nameListAs?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
