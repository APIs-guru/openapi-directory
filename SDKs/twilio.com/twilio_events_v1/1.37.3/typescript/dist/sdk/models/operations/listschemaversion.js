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
export var ListSchemaVersionServerList = [
    "https://events.twilio.com",
];
var ListSchemaVersionPathParams = /** @class */ (function (_super) {
    __extends(ListSchemaVersionPathParams, _super);
    function ListSchemaVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Id" }),
        __metadata("design:type", String)
    ], ListSchemaVersionPathParams.prototype, "id", void 0);
    return ListSchemaVersionPathParams;
}(SpeakeasyBase));
export { ListSchemaVersionPathParams };
var ListSchemaVersionQueryParams = /** @class */ (function (_super) {
    __extends(ListSchemaVersionQueryParams, _super);
    function ListSchemaVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSchemaVersionQueryParams.prototype, "pageSize", void 0);
    return ListSchemaVersionQueryParams;
}(SpeakeasyBase));
export { ListSchemaVersionQueryParams };
var ListSchemaVersionSecurity = /** @class */ (function (_super) {
    __extends(ListSchemaVersionSecurity, _super);
    function ListSchemaVersionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSchemaVersionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSchemaVersionSecurity;
}(SpeakeasyBase));
export { ListSchemaVersionSecurity };
var ListSchemaVersionListSchemaVersionResponseMeta = /** @class */ (function (_super) {
    __extends(ListSchemaVersionListSchemaVersionResponseMeta, _super);
    function ListSchemaVersionListSchemaVersionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSchemaVersionListSchemaVersionResponseMeta.prototype, "url", void 0);
    return ListSchemaVersionListSchemaVersionResponseMeta;
}(SpeakeasyBase));
export { ListSchemaVersionListSchemaVersionResponseMeta };
var ListSchemaVersionListSchemaVersionResponse = /** @class */ (function (_super) {
    __extends(ListSchemaVersionListSchemaVersionResponse, _super);
    function ListSchemaVersionListSchemaVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSchemaVersionListSchemaVersionResponseMeta)
    ], ListSchemaVersionListSchemaVersionResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema_versions", elemType: shared.EventsV1SchemaSchemaVersion }),
        __metadata("design:type", Array)
    ], ListSchemaVersionListSchemaVersionResponse.prototype, "schemaVersions", void 0);
    return ListSchemaVersionListSchemaVersionResponse;
}(SpeakeasyBase));
export { ListSchemaVersionListSchemaVersionResponse };
var ListSchemaVersionRequest = /** @class */ (function (_super) {
    __extends(ListSchemaVersionRequest, _super);
    function ListSchemaVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSchemaVersionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSchemaVersionPathParams)
    ], ListSchemaVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSchemaVersionQueryParams)
    ], ListSchemaVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSchemaVersionSecurity)
    ], ListSchemaVersionRequest.prototype, "security", void 0);
    return ListSchemaVersionRequest;
}(SpeakeasyBase));
export { ListSchemaVersionRequest };
var ListSchemaVersionResponse = /** @class */ (function (_super) {
    __extends(ListSchemaVersionResponse, _super);
    function ListSchemaVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSchemaVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSchemaVersionListSchemaVersionResponse)
    ], ListSchemaVersionResponse.prototype, "listSchemaVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSchemaVersionResponse.prototype, "statusCode", void 0);
    return ListSchemaVersionResponse;
}(SpeakeasyBase));
export { ListSchemaVersionResponse };
