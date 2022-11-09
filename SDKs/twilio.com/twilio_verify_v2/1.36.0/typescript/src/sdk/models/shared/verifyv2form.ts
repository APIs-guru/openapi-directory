import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormEnumFormTypesEnum } from "./formenumformtypesenum";


export class VerifyV2Form extends SpeakeasyBase {
  @Metadata({ data: "json, name=form_meta" })
  formMeta?: any;

  @Metadata({ data: "json, name=form_type" })
  formType?: FormEnumFormTypesEnum;

  @Metadata({ data: "json, name=forms" })
  forms?: any;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
