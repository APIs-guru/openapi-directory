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
import { AutoExportSettings } from "./autoexportsettings";
export var FolderMenuItemFolderTypeEnum;
(function (FolderMenuItemFolderTypeEnum) {
    FolderMenuItemFolderTypeEnum["Folder"] = "Folder";
    FolderMenuItemFolderTypeEnum["Location"] = "Location";
    FolderMenuItemFolderTypeEnum["Factory"] = "Factory";
    FolderMenuItemFolderTypeEnum["House"] = "House";
    FolderMenuItemFolderTypeEnum["Office"] = "Office";
    FolderMenuItemFolderTypeEnum["Machine"] = "Machine";
    FolderMenuItemFolderTypeEnum["VirtualMeter"] = "VirtualMeter";
    FolderMenuItemFolderTypeEnum["ElecticityFolder"] = "ElecticityFolder";
    FolderMenuItemFolderTypeEnum["WaterFolder"] = "WaterFolder";
    FolderMenuItemFolderTypeEnum["HeatFolder"] = "HeatFolder";
    FolderMenuItemFolderTypeEnum["GasFolder"] = "GasFolder";
    FolderMenuItemFolderTypeEnum["TemperatureFolder"] = "TemperatureFolder";
    FolderMenuItemFolderTypeEnum["Sun"] = "Sun";
    FolderMenuItemFolderTypeEnum["Light"] = "Light";
    FolderMenuItemFolderTypeEnum["Ice"] = "Ice";
    FolderMenuItemFolderTypeEnum["Sofa"] = "Sofa";
    FolderMenuItemFolderTypeEnum["Food"] = "Food";
    FolderMenuItemFolderTypeEnum["Coffee"] = "Coffee";
    FolderMenuItemFolderTypeEnum["Car"] = "Car";
    FolderMenuItemFolderTypeEnum["ChargingStation"] = "ChargingStation";
    FolderMenuItemFolderTypeEnum["Meter"] = "Meter";
    FolderMenuItemFolderTypeEnum["User"] = "User";
    FolderMenuItemFolderTypeEnum["Trash"] = "Trash";
    FolderMenuItemFolderTypeEnum["GridPhotovoltaicPowerSystem"] = "GridPhotovoltaicPowerSystem";
})(FolderMenuItemFolderTypeEnum || (FolderMenuItemFolderTypeEnum = {}));
// FolderMenuItem
/**
 * A folder menu item
**/
var FolderMenuItem = /** @class */ (function (_super) {
    __extends(FolderMenuItem, _super);
    function FolderMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoExportSettings" }),
        __metadata("design:type", AutoExportSettings)
    ], FolderMenuItem.prototype, "autoExportSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Children", elemType: FolderMenuItem }),
        __metadata("design:type", Array)
    ], FolderMenuItem.prototype, "children", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], FolderMenuItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FolderType" }),
        __metadata("design:type", String)
    ], FolderMenuItem.prototype, "folderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Icon" }),
        __metadata("design:type", String)
    ], FolderMenuItem.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], FolderMenuItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MeterSerialNumber" }),
        __metadata("design:type", String)
    ], FolderMenuItem.prototype, "meterSerialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], FolderMenuItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", String)
    ], FolderMenuItem.prototype, "userId", void 0);
    return FolderMenuItem;
}(SpeakeasyBase));
export { FolderMenuItem };
