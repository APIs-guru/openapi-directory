import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Label } from "./label";


export class Example extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=label" })
  label?: Label;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=object" })
  object?: string;
}
