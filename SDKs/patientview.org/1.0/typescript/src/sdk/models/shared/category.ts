import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=friendlyDescription" })
  friendlyDescription?: string;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=icd10Description" })
  icd10Description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=number" })
  number?: number;
}
