import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Name } from "./name";


export class GetPayeeListResponseIndividual extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: Name;
}
