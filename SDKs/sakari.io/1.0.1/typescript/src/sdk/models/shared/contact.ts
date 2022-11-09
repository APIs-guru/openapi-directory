import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Updated } from "./updated";
import { Error } from "./error";
import { Tag } from "./tag";
import { Updated } from "./updated";


export class ContactMobile extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;
}


export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=created" })
  created?: Updated;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=mobile" })
  mobile?: ContactMobile;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=updated" })
  updated?: Updated;

  @Metadata({ data: "json, name=valid" })
  valid?: boolean;
}
