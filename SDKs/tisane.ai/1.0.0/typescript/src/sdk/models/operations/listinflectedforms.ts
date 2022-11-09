import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListInflectedFormsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lexeme" })
  lexeme?: string;
}


export class ListInflectedFormsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListInflectedFormsQueryParams;
}


export class ListInflectedForms200ApplicationJsonFeatures extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ListInflectedForms200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=features", elemType: operations.ListInflectedForms200ApplicationJsonFeatures })
  features?: ListInflectedForms200ApplicationJsonFeatures[];

  @Metadata({ data: "json, name=isLemma" })
  isLemma?: boolean;

  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class ListInflectedFormsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.ListInflectedForms200ApplicationJson })
  listInflectedForms200ApplicationJsonObjects?: ListInflectedForms200ApplicationJson[];
}
