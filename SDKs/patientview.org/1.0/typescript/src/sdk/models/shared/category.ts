import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=friendlyDescription" })
  friendlyDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icd10Description" })
  icd10Description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;
}
