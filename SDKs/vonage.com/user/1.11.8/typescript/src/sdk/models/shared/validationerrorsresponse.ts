import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetailedInvalidParam } from "./detailedinvalidparam";


export class ValidationErrorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=invalid_parameters", elemType: shared.DetailedInvalidParam })
  invalidParameters?: DetailedInvalidParam[];

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
