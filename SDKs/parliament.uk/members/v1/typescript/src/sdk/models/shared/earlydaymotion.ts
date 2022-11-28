import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EarlyDayMotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateTabled" })
  dateTabled?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isAmendment" })
  isAmendment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPrayer" })
  isPrayer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=sponsorsCount" })
  sponsorsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
