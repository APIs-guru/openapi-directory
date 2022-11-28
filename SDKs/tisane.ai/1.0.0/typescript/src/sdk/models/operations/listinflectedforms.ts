import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListInflectedFormsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lexeme" })
  lexeme?: string;
}


export class ListInflectedForms200ApplicationJsonFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ListInflectedForms200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features", elemType: ListInflectedForms200ApplicationJsonFeatures })
  features?: ListInflectedForms200ApplicationJsonFeatures[];

  @SpeakeasyMetadata({ data: "json, name=isLemma" })
  isLemma?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class ListInflectedFormsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListInflectedFormsQueryParams;
}


export class ListInflectedFormsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: ListInflectedForms200ApplicationJson })
  listInflectedForms200ApplicationJsonObjects?: ListInflectedForms200ApplicationJson[];
}
