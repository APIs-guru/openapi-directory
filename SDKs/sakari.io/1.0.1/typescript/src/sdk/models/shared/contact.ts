import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Updated } from "./updated";
import { Error } from "./error";
import { Tag } from "./tag";



export class ContactMobile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Updated;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=mobile" })
  mobile?: ContactMobile;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Updated;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;
}
