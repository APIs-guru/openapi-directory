import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
