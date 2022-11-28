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
export var GetRole200ApplicationJsonActionEnum;
(function (GetRole200ApplicationJsonActionEnum) {
    GetRole200ApplicationJsonActionEnum["GetRole"] = "getRole";
})(GetRole200ApplicationJsonActionEnum || (GetRole200ApplicationJsonActionEnum = {}));
export var GetRole200ApplicationJsonDataIdEnum;
(function (GetRole200ApplicationJsonDataIdEnum) {
    GetRole200ApplicationJsonDataIdEnum["Inventory"] = "inventory";
    GetRole200ApplicationJsonDataIdEnum["Compliance"] = "compliance";
    GetRole200ApplicationJsonDataIdEnum["Administrator"] = "administrator";
    GetRole200ApplicationJsonDataIdEnum["Etc"] = "etc";
})(GetRole200ApplicationJsonDataIdEnum || (GetRole200ApplicationJsonDataIdEnum = {}));
export var GetRole200ApplicationJsonDataRightsEnum;
(function (GetRole200ApplicationJsonDataRightsEnum) {
    GetRole200ApplicationJsonDataRightsEnum["NodeRead"] = "node_read";
    GetRole200ApplicationJsonDataRightsEnum["UserAccountAll"] = "userAccount_all";
})(GetRole200ApplicationJsonDataRightsEnum || (GetRole200ApplicationJsonDataRightsEnum = {}));
var GetRole200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetRole200ApplicationJsonData, _super);
    function GetRole200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetRole200ApplicationJsonData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rights" }),
        __metadata("design:type", Array)
    ], GetRole200ApplicationJsonData.prototype, "rights", void 0);
    return GetRole200ApplicationJsonData;
}(SpeakeasyBase));
export { GetRole200ApplicationJsonData };
export var GetRole200ApplicationJsonResultEnum;
(function (GetRole200ApplicationJsonResultEnum) {
    GetRole200ApplicationJsonResultEnum["Success"] = "success";
    GetRole200ApplicationJsonResultEnum["Error"] = "error";
})(GetRole200ApplicationJsonResultEnum || (GetRole200ApplicationJsonResultEnum = {}));
var GetRole200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRole200ApplicationJson, _super);
    function GetRole200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetRole200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: GetRole200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], GetRole200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetRole200ApplicationJson.prototype, "result", void 0);
    return GetRole200ApplicationJson;
}(SpeakeasyBase));
export { GetRole200ApplicationJson };
var GetRoleResponse = /** @class */ (function (_super) {
    __extends(GetRoleResponse, _super);
    function GetRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRoleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRole200ApplicationJson)
    ], GetRoleResponse.prototype, "getRole200ApplicationJsonObject", void 0);
    return GetRoleResponse;
}(SpeakeasyBase));
export { GetRoleResponse };
