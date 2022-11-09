import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefaultData } from "./defaultdata";
import { Meta } from "./meta";
import { Status } from "./status";


export class SeldonMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=binData" })
  binData?: string;

  @Metadata({ data: "json, name=data" })
  data?: DefaultData;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=status" })
  status?: Status;

  @Metadata({ data: "json, name=strData" })
  strData?: string;
}
