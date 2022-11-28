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
var GetPayeesInvitationStatusV3PathParams = /** @class */ (function (_super) {
    __extends(GetPayeesInvitationStatusV3PathParams, _super);
    function GetPayeesInvitationStatusV3PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payorId" }),
        __metadata("design:type", String)
    ], GetPayeesInvitationStatusV3PathParams.prototype, "payorId", void 0);
    return GetPayeesInvitationStatusV3PathParams;
}(SpeakeasyBase));
export { GetPayeesInvitationStatusV3PathParams };
var GetPayeesInvitationStatusV3QueryParams = /** @class */ (function (_super) {
    __extends(GetPayeesInvitationStatusV3QueryParams, _super);
    function GetPayeesInvitationStatusV3QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invitationStatus" }),
        __metadata("design:type", String)
    ], GetPayeesInvitationStatusV3QueryParams.prototype, "invitationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPayeesInvitationStatusV3QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetPayeesInvitationStatusV3QueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payeeId" }),
        __metadata("design:type", String)
    ], GetPayeesInvitationStatusV3QueryParams.prototype, "payeeId", void 0);
    return GetPayeesInvitationStatusV3QueryParams;
}(SpeakeasyBase));
export { GetPayeesInvitationStatusV3QueryParams };
var GetPayeesInvitationStatusV3Request = /** @class */ (function (_super) {
    __extends(GetPayeesInvitationStatusV3Request, _super);
    function GetPayeesInvitationStatusV3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayeesInvitationStatusV3PathParams)
    ], GetPayeesInvitationStatusV3Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayeesInvitationStatusV3QueryParams)
    ], GetPayeesInvitationStatusV3Request.prototype, "queryParams", void 0);
    return GetPayeesInvitationStatusV3Request;
}(SpeakeasyBase));
export { GetPayeesInvitationStatusV3Request };
var GetPayeesInvitationStatusV3Response = /** @class */ (function (_super) {
    __extends(GetPayeesInvitationStatusV3Response, _super);
    function GetPayeesInvitationStatusV3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayeesInvitationStatusV3Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PagedPayeeInvitationStatusResponse)
    ], GetPayeesInvitationStatusV3Response.prototype, "pagedPayeeInvitationStatusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayeesInvitationStatusV3Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayeesInvitationStatusV3Response.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayeesInvitationStatusV3Response.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayeesInvitationStatusV3Response.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPayeesInvitationStatusV3Response.prototype, "inlineResponse404", void 0);
    return GetPayeesInvitationStatusV3Response;
}(SpeakeasyBase));
export { GetPayeesInvitationStatusV3Response };
