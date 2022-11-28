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
var CreateProjectAlt1RequestBody = /** @class */ (function (_super) {
    __extends(CreateProjectAlt1RequestBody, _super);
    function CreateProjectAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateProjectAlt1RequestBody.prototype, "name", void 0);
    return CreateProjectAlt1RequestBody;
}(SpeakeasyBase));
export { CreateProjectAlt1RequestBody };
var CreateProjectAlt1Security = /** @class */ (function (_super) {
    __extends(CreateProjectAlt1Security, _super);
    function CreateProjectAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateProjectAlt1Security.prototype, "oauth2", void 0);
    return CreateProjectAlt1Security;
}(SpeakeasyBase));
export { CreateProjectAlt1Security };
var CreateProjectAlt1Request = /** @class */ (function (_super) {
    __extends(CreateProjectAlt1Request, _super);
    function CreateProjectAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateProjectAlt1RequestBody)
    ], CreateProjectAlt1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectAlt1Security)
    ], CreateProjectAlt1Request.prototype, "security", void 0);
    return CreateProjectAlt1Request;
}(SpeakeasyBase));
export { CreateProjectAlt1Request };
var CreateProjectAlt1Response = /** @class */ (function (_super) {
    __extends(CreateProjectAlt1Response, _super);
    function CreateProjectAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProjectAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProjectAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CreateProjectAlt1Response.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Project)
    ], CreateProjectAlt1Response.prototype, "project", void 0);
    return CreateProjectAlt1Response;
}(SpeakeasyBase));
export { CreateProjectAlt1Response };
