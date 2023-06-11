import React from "react"
import { LaporanThread } from "../../molecules"
import { TooltipButton } from "../../atoms"

function ThreadStats() {
    return (
        <div>
            <div className="w-full ">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-12 gap-1 pt-[10px]">
                        <div className="col-end-13 col-span-11">
                            <div className="flex gap-2 items-center">
                                <h3>Manage Thread</h3>
                                <TooltipButton />
                            </div>
                            <LaporanThread />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreadStats
