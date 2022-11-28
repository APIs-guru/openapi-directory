var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var ListVariableServerList = [
    "https://serverless.twilio.com",
];
var ListVariablePathParams = /** @class */ (function (_super) {
    __extends(ListVariablePathParams, _super);
    function ListVariablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" }),
        __metadata("design:type", String)
    ], ListVariablePathParams.prototype, "environmentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListVariablePathParams.prototype, "serviceSid", void 0);
    return ListVariablePathParams;
}(SpeakeasyBase));
export { ListVariablePathParams };
var ListVariableQueryParams = /** @class */ (function (_super) {
    __extends(ListVariableQueryParams, _super);
    function ListVariableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListVariableQueryParams.prototype, "pageSize", void 0);
    return ListVariableQueryParams;
}(SpeakeasyBase));
export { ListVariableQueryParams };
var ListVariableSecurity = /** @class */ (function (_super) {
    __extends(ListVariableSecurity, _super);
    function ListVariableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListVariableSecurity.prototype, "accountSidAuthToken", void 0);
    return ListVariableSecurity;
}(SpeakeasyBase));
export { ListVariableSecurity };
var ListVariableListVariableResponseMeta = /** @class */ (function (_super) {
    __extends(ListVariableListVariableResponseMeta, _super);
    function ListVariableListVariableResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListVariableListVariableResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListVariableListVariableResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListVariableListVariableResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListVariableListVariableResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListVariableListVariableResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListVariableListVariableResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListVariableListVariableResponseMeta.prototype, "url", void 0);
    return ListVariableListVariableResponseMeta;
}(SpeakeasyBase));
export { ListVariableListVariableResponseMeta };
var ListVariableListVariableResponse = /** @class */ (function (_super) {
    __extends(ListVariableListVariableResponse, _super);
    function ListVariableListVariableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListVariableListVariableResponseMeta)
    ], ListVariableListVariableResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variables", elemType: shared.ServerlessV1ServiceEnvironmentVariable }),
        __metadata("design:type", Array)
    ], ListVariableListVariableResponse.prototype, "variables", void 0);
    return ListVariableListVariableResponse;
}(SpeakeasyBase));
export { ListVariableListVariableResponse };
var ListVariableRequest = /** @class */ (function (_super) {
    __extends(ListVariableRequest, _super);
    function ListVariableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListVariableRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVariablePathParams)
    ], ListVariableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVariableQueryParams)
    ], ListVariableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVariableSecurity)
    ], ListVariableRequest.prototype, "security", void 0);
    return ListVariableRequest;
}(SpeakeasyBase));
export { ListVariableRequest };
var ListVariableResponse = /** @class */ (function (_super) {
    __extends(ListVariableResponse, _super);
    function ListVariableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListVariableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVariableListVariableResponse)
    ], ListVariableResponse.prototype, "listVariableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListVariableResponse.prototype, "statusCode", void 0);
    return ListVariableResponse;
}(SpeakeasyBase));
export { ListVariableResponse };
