import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Name } from "./name";



export class GetPayeeListResponseIndividual extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: Name;
}
