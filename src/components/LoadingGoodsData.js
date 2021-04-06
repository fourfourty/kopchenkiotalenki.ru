import React from 'react';

const OnLoadingGoodsData = (Component) => {
    return function LoadingGoodsData ({ isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />

        else return (
            <div>
                <h1>Подождите, данные загружаются!</h1>
            </div>
        )
    }
}

export default OnLoadingGoodsData;