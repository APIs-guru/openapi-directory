import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultData } from "./defaultdata";
import { Meta } from "./meta";
import { Status } from "./status";



export class SeldonMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binData" })
  binData?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: DefaultData;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;

  @SpeakeasyMetadata({ data: "json, name=strData" })
  strData?: string;
}
