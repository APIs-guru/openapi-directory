import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
