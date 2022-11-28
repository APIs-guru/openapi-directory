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
export var ListEntityServerList = [
    "https://verify.twilio.com",
];
var ListEntityPathParams = /** @class */ (function (_super) {
    __extends(ListEntityPathParams, _super);
    function ListEntityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListEntityPathParams.prototype, "serviceSid", void 0);
    return ListEntityPathParams;
}(SpeakeasyBase));
export { ListEntityPathParams };
var ListEntityQueryParams = /** @class */ (function (_super) {
    __extends(ListEntityQueryParams, _super);
    function ListEntityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEntityQueryParams.prototype, "pageSize", void 0);
    return ListEntityQueryParams;
}(SpeakeasyBase));
export { ListEntityQueryParams };
var ListEntitySecurity = /** @class */ (function (_super) {
    __extends(ListEntitySecurity, _super);
    function ListEntitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEntitySecurity.prototype, "accountSidAuthToken", void 0);
    return ListEntitySecurity;
}(SpeakeasyBase));
export { ListEntitySecurity };
var ListEntityListEntityResponseMeta = /** @class */ (function (_super) {
    __extends(ListEntityListEntityResponseMeta, _super);
    function ListEntityListEntityResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEntityListEntityResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEntityListEntityResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEntityListEntityResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEntityListEntityResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEntityListEntityResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEntityListEntityResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEntityListEntityResponseMeta.prototype, "url", void 0);
    return ListEntityListEntityResponseMeta;
}(SpeakeasyBase));
export { ListEntityListEntityResponseMeta };
var ListEntityListEntityResponse = /** @class */ (function (_super) {
    __extends(ListEntityListEntityResponse, _super);
    function ListEntityListEntityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities", elemType: shared.VerifyV2ServiceEntity }),
        __metadata("design:type", Array)
    ], ListEntityListEntityResponse.prototype, "entities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListEntityListEntityResponseMeta)
    ], ListEntityListEntityResponse.prototype, "meta", void 0);
    return ListEntityListEntityResponse;
}(SpeakeasyBase));
export { ListEntityListEntityResponse };
var ListEntityRequest = /** @class */ (function (_super) {
    __extends(ListEntityRequest, _super);
    function ListEntityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListEntityRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEntityPathParams)
    ], ListEntityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEntityQueryParams)
    ], ListEntityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEntitySecurity)
    ], ListEntityRequest.prototype, "security", void 0);
    return ListEntityRequest;
}(SpeakeasyBase));
export { ListEntityRequest };
var ListEntityResponse = /** @class */ (function (_super) {
    __extends(ListEntityResponse, _super);
    function ListEntityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListEntityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEntityListEntityResponse)
    ], ListEntityResponse.prototype, "listEntityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListEntityResponse.prototype, "statusCode", void 0);
    return ListEntityResponse;
}(SpeakeasyBase));
export { ListEntityResponse };
