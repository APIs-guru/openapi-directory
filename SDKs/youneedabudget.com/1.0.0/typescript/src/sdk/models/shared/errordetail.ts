import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
