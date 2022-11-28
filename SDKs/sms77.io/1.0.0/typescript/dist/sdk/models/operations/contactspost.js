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
export var ContactsPostActionEnum;
(function (ContactsPostActionEnum) {
    ContactsPostActionEnum["Del"] = "del";
    ContactsPostActionEnum["Write"] = "write";
})(ContactsPostActionEnum || (ContactsPostActionEnum = {}));
var ContactsPostQueryParams = /** @class */ (function (_super) {
    __extends(ContactsPostQueryParams, _super);
    function ContactsPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], ContactsPostQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], ContactsPostQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=empfaenger" }),
        __metadata("design:type", String)
    ], ContactsPostQueryParams.prototype, "empfaenger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], ContactsPostQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=json" }),
        __metadata("design:type", Number)
    ], ContactsPostQueryParams.prototype, "json", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nick" }),
        __metadata("design:type", String)
    ], ContactsPostQueryParams.prototype, "nick", void 0);
    return ContactsPostQueryParams;
}(SpeakeasyBase));
export { ContactsPostQueryParams };
var ContactsPostRequest = /** @class */ (function (_super) {
    __extends(ContactsPostRequest, _super);
    function ContactsPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactsPostQueryParams)
    ], ContactsPostRequest.prototype, "queryParams", void 0);
    return ContactsPostRequest;
}(SpeakeasyBase));
export { ContactsPostRequest };
var ContactsPostResponse = /** @class */ (function (_super) {
    __extends(ContactsPostResponse, _super);
    function ContactsPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactsPostResponse.prototype, "contactsPost200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactsPostResponse.prototype, "contactsPost200TextPlainString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactsPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactsPostResponse.prototype, "statusCode", void 0);
    return ContactsPostResponse;
}(SpeakeasyBase));
export { ContactsPostResponse };
