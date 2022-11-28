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
export var ListAccountServerList = [
    "https://api.twilio.com",
];
var ListAccountQueryParams = /** @class */ (function (_super) {
    __extends(ListAccountQueryParams, _super);
    function ListAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListAccountQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAccountQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListAccountQueryParams.prototype, "status", void 0);
    return ListAccountQueryParams;
}(SpeakeasyBase));
export { ListAccountQueryParams };
var ListAccountSecurity = /** @class */ (function (_super) {
    __extends(ListAccountSecurity, _super);
    function ListAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAccountSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAccountSecurity;
}(SpeakeasyBase));
export { ListAccountSecurity };
var ListAccountListAccountResponse = /** @class */ (function (_super) {
    __extends(ListAccountListAccountResponse, _super);
    function ListAccountListAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts", elemType: shared.ApiV2010Account }),
        __metadata("design:type", Array)
    ], ListAccountListAccountResponse.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAccountListAccountResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAccountListAccountResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAccountListAccountResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAccountListAccountResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAccountListAccountResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAccountListAccountResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAccountListAccountResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAccountListAccountResponse.prototype, "uri", void 0);
    return ListAccountListAccountResponse;
}(SpeakeasyBase));
export { ListAccountListAccountResponse };
var ListAccountRequest = /** @class */ (function (_super) {
    __extends(ListAccountRequest, _super);
    function ListAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAccountRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAccountQueryParams)
    ], ListAccountRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAccountSecurity)
    ], ListAccountRequest.prototype, "security", void 0);
    return ListAccountRequest;
}(SpeakeasyBase));
export { ListAccountRequest };
var ListAccountResponse = /** @class */ (function (_super) {
    __extends(ListAccountResponse, _super);
    function ListAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAccountListAccountResponse)
    ], ListAccountResponse.prototype, "listAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAccountResponse.prototype, "statusCode", void 0);
    return ListAccountResponse;
}(SpeakeasyBase));
export { ListAccountResponse };
