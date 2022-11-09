import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Contact } from "./contact";


export class ContactResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Contact;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
