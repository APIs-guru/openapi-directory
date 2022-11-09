import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EarlyDayMotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateTabled" })
  dateTabled?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isAmendment" })
  isAmendment?: boolean;

  @Metadata({ data: "json, name=isPrayer" })
  isPrayer?: boolean;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=sponsorsCount" })
  sponsorsCount?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
