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
var DeleteDatabasePkPathParams = /** @class */ (function (_super) {
    __extends(DeleteDatabasePkPathParams, _super);
    function DeleteDatabasePkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteDatabasePkPathParams.prototype, "pk", void 0);
    return DeleteDatabasePkPathParams;
}(SpeakeasyBase));
export { DeleteDatabasePkPathParams };
var DeleteDatabasePkSecurity = /** @class */ (function (_super) {
    __extends(DeleteDatabasePkSecurity, _super);
    function DeleteDatabasePkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteDatabasePkSecurity.prototype, "jwt", void 0);
    return DeleteDatabasePkSecurity;
}(SpeakeasyBase));
export { DeleteDatabasePkSecurity };
var DeleteDatabasePk200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatabasePk200ApplicationJson, _super);
    function DeleteDatabasePk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatabasePk200ApplicationJson.prototype, "message", void 0);
    return DeleteDatabasePk200ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatabasePk200ApplicationJson };
var DeleteDatabasePk401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatabasePk401ApplicationJson, _super);
    function DeleteDatabasePk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatabasePk401ApplicationJson.prototype, "message", void 0);
    return DeleteDatabasePk401ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatabasePk401ApplicationJson };
var DeleteDatabasePk403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatabasePk403ApplicationJson, _super);
    function DeleteDatabasePk403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatabasePk403ApplicationJson.prototype, "message", void 0);
    return DeleteDatabasePk403ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatabasePk403ApplicationJson };
var DeleteDatabasePk404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatabasePk404ApplicationJson, _super);
    function DeleteDatabasePk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatabasePk404ApplicationJson.prototype, "message", void 0);
    return DeleteDatabasePk404ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatabasePk404ApplicationJson };
var DeleteDatabasePk422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatabasePk422ApplicationJson, _super);
    function DeleteDatabasePk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatabasePk422ApplicationJson.prototype, "message", void 0);
    return DeleteDatabasePk422ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatabasePk422ApplicationJson };
var DeleteDatabasePk500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatabasePk500ApplicationJson, _super);
    function DeleteDatabasePk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatabasePk500ApplicationJson.prototype, "message", void 0);
    return DeleteDatabasePk500ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatabasePk500ApplicationJson };
var DeleteDatabasePkRequest = /** @class */ (function (_super) {
    __extends(DeleteDatabasePkRequest, _super);
    function DeleteDatabasePkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabasePkPathParams)
    ], DeleteDatabasePkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabasePkSecurity)
    ], DeleteDatabasePkRequest.prototype, "security", void 0);
    return DeleteDatabasePkRequest;
}(SpeakeasyBase));
export { DeleteDatabasePkRequest };
var DeleteDatabasePkResponse = /** @class */ (function (_super) {
    __extends(DeleteDatabasePkResponse, _super);
    function DeleteDatabasePkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDatabasePkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabasePk200ApplicationJson)
    ], DeleteDatabasePkResponse.prototype, "deleteDatabasePk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabasePk401ApplicationJson)
    ], DeleteDatabasePkResponse.prototype, "deleteDatabasePk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabasePk403ApplicationJson)
    ], DeleteDatabasePkResponse.prototype, "deleteDatabasePk403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabasePk404ApplicationJson)
    ], DeleteDatabasePkResponse.prototype, "deleteDatabasePk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabasePk422ApplicationJson)
    ], DeleteDatabasePkResponse.prototype, "deleteDatabasePk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatabasePk500ApplicationJson)
    ], DeleteDatabasePkResponse.prototype, "deleteDatabasePk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDatabasePkResponse.prototype, "statusCode", void 0);
    return DeleteDatabasePkResponse;
}(SpeakeasyBase));
export { DeleteDatabasePkResponse };
