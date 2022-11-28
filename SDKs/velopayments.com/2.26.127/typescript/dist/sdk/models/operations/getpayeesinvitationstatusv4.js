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
var GetPayeesInvitationStatusV4PathParams = /** @class */ (function (_super) {
    __extends(GetPayeesInvitationStatusV4PathParams, _super);
    function GetPayeesInvitationStatusV4PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payorId" }),
        __metadata("design:type", String)
    ], GetPayeesInvitationStatusV4PathParams.prototype, "payorId", void 0);
    return GetPayeesInvitationStatusV4PathParams;
}(SpeakeasyBase));
export { GetPayeesInvitationStatusV4PathParams };
var GetPayeesInvitationStatusV4QueryParams = /** @class */ (function (_super) {
    __extends(GetPayeesInvitationStatusV4QueryParams, _super);
    function GetPayeesInvitationStatusV4QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invitationStatus" }),
        __metadata("design:type", String)
    ], GetPayeesInvitationStatusV4QueryParams.prototype, "invitationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPayeesInvitationStatusV4QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetPayeesInvitationStatusV4QueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payeeId" }),
        __metadata("design:type", String)
    ], GetPayeesInvitationStatusV4QueryParams.prototype, "payeeId", void 0);
    return GetPayeesInvitationStatusV4QueryParams;
}(SpeakeasyBase));
export { GetPayeesInvitationStatusV4QueryParams };
var GetPayeesInvitationStatusV4Request = /** @class */ (function (_super) {
    __extends(GetPayeesInvitationStatusV4Request, _super);
    function GetPayeesInvitationStatusV4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayeesInvitationStatusV4PathParams)
    ], GetPayeesInvitationStatusV4Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayeesInvitationStatusV4QueryParams)
    ], GetPayeesInvitationStatusV4Request.prototype, "queryParams", void 0);
    return GetPayeesInvitationStatusV4Request;
}(SpeakeasyBase));
export { GetPayeesInvitationStatusV4Request };
var GetPayeesInvitationStatusV4Response = /** @class */ (function (_super) {
    __extends(GetPayeesInvitationStatusV4Response, _super);
    function GetPayeesInvitationStatusV4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayeesInvitationStatusV4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PagedPayeeInvitationStatusResponse2)
    ], GetPayeesInvitationStatusV4Response.prototype, "pagedPayeeInvitationStatusResponse2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayeesInvitationStatusV4Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayeesInvitationStatusV4Response.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayeesInvitationStatusV4Response.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayeesInvitationStatusV4Response.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayeesInvitationStatusV4Response.prototype, "inlineResponse404", void 0);
    return GetPayeesInvitationStatusV4Response;
}(SpeakeasyBase));
export { GetPayeesInvitationStatusV4Response };
