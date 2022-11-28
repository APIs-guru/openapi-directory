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
var AddVideosToProjectAlt1PathParams = /** @class */ (function (_super) {
    __extends(AddVideosToProjectAlt1PathParams, _super);
    function AddVideosToProjectAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], AddVideosToProjectAlt1PathParams.prototype, "projectId", void 0);
    return AddVideosToProjectAlt1PathParams;
}(SpeakeasyBase));
export { AddVideosToProjectAlt1PathParams };
var AddVideosToProjectAlt1QueryParams = /** @class */ (function (_super) {
    __extends(AddVideosToProjectAlt1QueryParams, _super);
    function AddVideosToProjectAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" }),
        __metadata("design:type", String)
    ], AddVideosToProjectAlt1QueryParams.prototype, "uris", void 0);
    return AddVideosToProjectAlt1QueryParams;
}(SpeakeasyBase));
export { AddVideosToProjectAlt1QueryParams };
var AddVideosToProjectAlt1Security = /** @class */ (function (_super) {
    __extends(AddVideosToProjectAlt1Security, _super);
    function AddVideosToProjectAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AddVideosToProjectAlt1Security.prototype, "oauth2", void 0);
    return AddVideosToProjectAlt1Security;
}(SpeakeasyBase));
export { AddVideosToProjectAlt1Security };
var AddVideosToProjectAlt1Request = /** @class */ (function (_super) {
    __extends(AddVideosToProjectAlt1Request, _super);
    function AddVideosToProjectAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideosToProjectAlt1PathParams)
    ], AddVideosToProjectAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideosToProjectAlt1QueryParams)
    ], AddVideosToProjectAlt1Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideosToProjectAlt1Security)
    ], AddVideosToProjectAlt1Request.prototype, "security", void 0);
    return AddVideosToProjectAlt1Request;
}(SpeakeasyBase));
export { AddVideosToProjectAlt1Request };
var AddVideosToProjectAlt1Response = /** @class */ (function (_super) {
    __extends(AddVideosToProjectAlt1Response, _super);
    function AddVideosToProjectAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVideosToProjectAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVideosToProjectAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], AddVideosToProjectAlt1Response.prototype, "error", void 0);
    return AddVideosToProjectAlt1Response;
}(SpeakeasyBase));
export { AddVideosToProjectAlt1Response };
