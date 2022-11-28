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
var ContactsCreatePathParams = /** @class */ (function (_super) {
    __extends(ContactsCreatePathParams, _super);
    function ContactsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContactsCreatePathParams.prototype, "accountId", void 0);
    return ContactsCreatePathParams;
}(SpeakeasyBase));
export { ContactsCreatePathParams };
export var ContactsCreateMergeStrategyEnum;
(function (ContactsCreateMergeStrategyEnum) {
    ContactsCreateMergeStrategyEnum["Append"] = "append";
    ContactsCreateMergeStrategyEnum["Core"] = "core";
    ContactsCreateMergeStrategyEnum["Remove"] = "remove";
})(ContactsCreateMergeStrategyEnum || (ContactsCreateMergeStrategyEnum = {}));
var ContactsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContactsCreateQueryParams, _super);
    function ContactsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mergeStrategy" }),
        __metadata("design:type", String)
    ], ContactsCreateQueryParams.prototype, "mergeStrategy", void 0);
    return ContactsCreateQueryParams;
}(SpeakeasyBase));
export { ContactsCreateQueryParams };
var ContactsCreateRequests = /** @class */ (function (_super) {
    __extends(ContactsCreateRequests, _super);
    function ContactsCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ContactRequest)
    ], ContactsCreateRequests.prototype, "contactRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/csv" }),
        __metadata("design:type", String)
    ], ContactsCreateRequests.prototype, "string", void 0);
    return ContactsCreateRequests;
}(SpeakeasyBase));
export { ContactsCreateRequests };
var ContactsCreateSecurity = /** @class */ (function (_super) {
    __extends(ContactsCreateSecurity, _super);
    function ContactsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], ContactsCreateSecurity.prototype, "sakariAuth", void 0);
    return ContactsCreateSecurity;
}(SpeakeasyBase));
export { ContactsCreateSecurity };
var ContactsCreateRequest = /** @class */ (function (_super) {
    __extends(ContactsCreateRequest, _super);
    function ContactsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactsCreatePathParams)
    ], ContactsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactsCreateQueryParams)
    ], ContactsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactsCreateRequests)
    ], ContactsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactsCreateSecurity)
    ], ContactsCreateRequest.prototype, "security", void 0);
    return ContactsCreateRequest;
}(SpeakeasyBase));
export { ContactsCreateRequest };
var ContactsCreateResponse = /** @class */ (function (_super) {
    __extends(ContactsCreateResponse, _super);
    function ContactsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ContactsCreateResponse.prototype, "contactsCreate201ApplicationJsonOneOf", void 0);
    return ContactsCreateResponse;
}(SpeakeasyBase));
export { ContactsCreateResponse };
