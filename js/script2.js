// 平均点を入力しておく
const averageScores = {
    japanese: 70, math: 65, english: 75
};

// 標準偏差を設定
const standardDeviations = {
    japanese: 10, math: 15, english: 12
};

// 入力値と平均点を比較する関数
function compareScores() {
    // フォームから入力された点数を取得
    const japaneseScore = parseInt(document.getElementById('japanese').value);
    const mathScore = parseInt(document.getElementById('math').value);
    const englishScore = parseInt(document.getElementById('english').value);

    // 偏差値を計算
    const deviationScores = {
        japanese: 50 + ((japaneseScore - averageScores.japanese) / standardDeviations.japanese) * 10,
        math: 50 + ((mathScore - averageScores.math) / standardDeviations.math) * 10,
        english: 50 + ((englishScore - averageScores.english) / standardDeviations.english) * 10
    };

    // 結果を表示する表
    const resultTable = `
    <table border="1">
    <tr>
        <th>教科</th>
        <th>平均点</th>
        <th>自分の点数</th>
        <th>標準偏差</th>
        <th>偏差値</th>
    </tr>
    <tr>
        <td>国語</td>
        <td>${averageScores.japanese}</td>
        <td>${japaneseScore}</td>
        <td>${standardDeviations.japanese}</td>
        <td>${deviationScores.japanese.toFixed(2)}</td>
    </tr>
    <tr>
        <td>数学</td>
        <td>${averageScores.math}</td>
        <td>${mathScore}</td>
        <td>${standardDeviations.math}</td>
        <td>${deviationScores.math.toFixed(2)}</td>
    </tr>
    <tr>
        <td>英語</td>
        <td>${averageScores.english}</td>
        <td>${englishScore}</td>
        <td>${standardDeviations.english}</td>
        <td>${deviationScores.english.toFixed(2)}</td>
    </tr>
    </table>
    `;

    // 表を表示
    document.getElementById('resultTable').innerHTML = resultTable;

    // グラフを出力
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['国語', '数学', '英語'],
            datasets: [
                {
                    label: '平均点',
                    data: [averageScores.japanese, averageScores.math, averageScores.english],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: '自分の点数',
                    data: [japaneseScore, mathScore, englishScore],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: '偏差値',
                    data: [deviationScores.japanese, deviationScores.math, deviationScores.english],
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true, // 0から始まるように設定
                    max: 100 // 最大値を100
                }
            }
        }
    });
}
