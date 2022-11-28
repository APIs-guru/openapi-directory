import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormEnumFormTypesEnum } from "./formenumformtypesenum";



export class VerifyV2Form extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=form_meta" })
  formMeta?: any;

  @SpeakeasyMetadata({ data: "json, name=form_type" })
  formType?: FormEnumFormTypesEnum;

  @SpeakeasyMetadata({ data: "json, name=forms" })
  forms?: any;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
